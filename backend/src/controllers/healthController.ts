import { Request, Response } from 'express';

export class HealthController {
  public static check(req: Request, res: Response): void {
    res.status(200).json({
      status: 'ok',
      service: 'Sama Events API',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  }
}
