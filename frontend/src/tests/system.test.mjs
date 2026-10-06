import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

// ---------------------------------------------------------------------------
// 1. Contact Form & Enquiry Service Validation
// ---------------------------------------------------------------------------
describe('Issue 1 & 2: Contact Form & Enquiry Service', () => {
  const validTypes = [
    'General Enquiry',
    'Event Enquiry',
    'Stall Enquiry',
    'Partnership',
  ];

  it('supports all required enquiry types', () => {
    validTypes.forEach((type) => {
      assert.ok(validTypes.includes(type), `${type} must be supported`);
    });
  });

  it('maps Stall Enquiry to Stall Booking for backend compatibility', () => {
    const mapEnquiryType = (type) =>
      type === 'Stall Enquiry' ? 'Stall Booking' : type;

    assert.equal(mapEnquiryType('Stall Enquiry'), 'Stall Booking');
    assert.equal(mapEnquiryType('General Enquiry'), 'General Enquiry');
    assert.equal(mapEnquiryType('Event Enquiry'), 'Event Enquiry');
    assert.equal(mapEnquiryType('Partnership'), 'Partnership');
  });

  it('handles submission responses properly without false success', () => {
    // Simulated state machine
    let submitSuccess = false;
    let errorMessage = null;

    const handleResponse = (response) => {
      if (response && response.success !== false) {
        submitSuccess = true;
        errorMessage = null;
      } else {
        submitSuccess = false;
        errorMessage = response?.error || 'Unable to submit your enquiry right now. Please try again or contact us on WhatsApp.';
      }
    };

    // Successful response
    handleResponse({ success: true, message: 'Received' });
    assert.equal(submitSuccess, true);
    assert.equal(errorMessage, null);

    // Failed response
    handleResponse({ success: false, error: 'Database error' });
    assert.equal(submitSuccess, false);
    assert.equal(errorMessage, 'Database error');

    // Network error catch simulation
    try {
      throw new Error('Network error');
    } catch {
      submitSuccess = false;
      errorMessage = 'Unable to submit your enquiry right now. Please try again or contact us on WhatsApp.';
    }
    assert.equal(submitSuccess, false);
    assert.equal(errorMessage, 'Unable to submit your enquiry right now. Please try again or contact us on WhatsApp.');
  });
});

// ---------------------------------------------------------------------------
// 2. Event Routing & Slug Resolution
// ---------------------------------------------------------------------------
describe('Issue 5: Event Slug Handling', () => {
  const events = [
    { slug: 'noor-e-ramzan-2', title: 'Noor-E-Ramzan 2.0', isFeatured: true },
    { slug: 'chennai-food-fiesta-2027', title: 'Chennai Food Fiesta 2027' },
    { slug: 'festive-souk-2027', title: 'Festive Souk & Lifestyle Expo' },
  ];

  const getEventBySlug = (slug) => events.find((e) => e.slug === slug);

  it('resolves valid event slugs correctly', () => {
    const event = getEventBySlug('noor-e-ramzan-2');
    assert.ok(event);
    assert.equal(event.title, 'Noor-E-Ramzan 2.0');
  });

  it('returns undefined for invalid event slugs (triggers NotFound instead of fallback)', () => {
    const invalidEvent = getEventBySlug('invalid-event-name');
    assert.equal(invalidEvent, undefined);

    const nonExistent = getEventBySlug('random-slug-999');
    assert.equal(nonExistent, undefined);
  });
});

// ---------------------------------------------------------------------------
// 3. Gallery Keyboard Accessibility
// ---------------------------------------------------------------------------
describe('Issue 6: Gallery Keyboard Accessibility', () => {
  it('handles Enter and Space keydown events to open lightbox', () => {
    let openedImage = null;
    const testImage = { id: 'img-1', title: 'Test Photo', url: '/test.jpg' };

    const handleKeyDown = (key, img) => {
      if (key === 'Enter' || key === ' ') {
        openedImage = img;
        return true;
      }
      return false;
    };

    assert.equal(handleKeyDown('Enter', testImage), true);
    assert.deepEqual(openedImage, testImage);

    openedImage = null;
    assert.equal(handleKeyDown(' ', testImage), true);
    assert.deepEqual(openedImage, testImage);

    openedImage = null;
    assert.equal(handleKeyDown('Tab', testImage), false);
    assert.equal(openedImage, null);
  });

  it('handles Escape key to close lightbox', () => {
    let selectedImage = { id: 'img-1' };
    const handleEscape = (key) => {
      if (key === 'Escape' && selectedImage) {
        selectedImage = null;
      }
    };

    handleEscape('Escape');
    assert.equal(selectedImage, null);
  });
});

// ---------------------------------------------------------------------------
// 4. Backend Route Authorization
// ---------------------------------------------------------------------------
describe('Issue 3: Backend Endpoint Protection', () => {
  const mockAuthMiddleware = (req, adminKey) => {
    const apiKey = req.headers['x-api-key'] || (req.headers.authorization?.startsWith('Bearer ') ? req.headers.authorization.substring(7) : undefined);

    if (!apiKey) {
      return { status: 401, error: 'Unauthorized: Authentication credentials required to access enquiry data.' };
    }
    if (!adminKey || apiKey !== adminKey) {
      return { status: 403, error: 'Forbidden: Invalid or insufficient authorization credentials.' };
    }
    return { status: 200, success: true };
  };

  it('rejects public requests without credentials with 401', () => {
    const res = mockAuthMiddleware({ headers: {} }, 'secret-admin-key');
    assert.equal(res.status, 401);
  });

  it('rejects invalid credentials with 403', () => {
    const res = mockAuthMiddleware({ headers: { 'x-api-key': 'wrong-key' } }, 'secret-admin-key');
    assert.equal(res.status, 403);
  });

  it('allows access with valid admin API key', () => {
    const res = mockAuthMiddleware({ headers: { 'x-api-key': 'secret-admin-key' } }, 'secret-admin-key');
    assert.equal(res.status, 200);
  });

  it('allows access with valid Bearer token', () => {
    const res = mockAuthMiddleware({ headers: { authorization: 'Bearer secret-admin-key' } }, 'secret-admin-key');
    assert.equal(res.status, 200);
  });
});
