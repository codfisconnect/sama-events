import { Router } from 'express';
import enquiryRoutes from './enquiryRoutes';
import healthRoutes from './healthRoutes';

const router = Router();

router.use('/health', healthRoutes);
router.use('/enquiries', enquiryRoutes);

export default router;
