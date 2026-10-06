import { Request, Response, NextFunction } from 'express';

/**
 * Authentication middleware to protect sensitive administrative endpoints.
 * Requires an Admin API key via 'x-api-key' header or 'Authorization: Bearer <key>'.
 */
export const requireAdminAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const adminKey = process.env.ADMIN_API_KEY;
  const authHeader = req.headers.authorization;
  const apiKeyHeader = req.headers['x-api-key'];

  let providedKey: string | undefined;

  if (apiKeyHeader && typeof apiKeyHeader === 'string') {
    providedKey = apiKeyHeader.trim();
  } else if (authHeader && authHeader.startsWith('Bearer ')) {
    providedKey = authHeader.substring(7).trim();
  }

  // 1. Missing authentication credentials
  if (!providedKey) {
    res.status(401).json({
      success: false,
      error: 'Unauthorized: Authentication credentials required to access enquiry data.',
    });
    return;
  }

  // 2. If no ADMIN_API_KEY configured on server, deny access by default for security
  if (!adminKey || providedKey !== adminKey) {
    res.status(403).json({
      success: false,
      error: 'Forbidden: Invalid or insufficient authorization credentials.',
    });
    return;
  }

  next();
};
