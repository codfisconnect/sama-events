import { Router } from 'express';
import { EnquiryController } from '../controllers/enquiryController';
import { requireAdminAuth } from '../middleware/authMiddleware';

const router = Router();

// Public submission
router.post('/', EnquiryController.create);

// Protected retrieval for authorized admin only
router.get('/', requireAdminAuth, EnquiryController.list);

export default router;
