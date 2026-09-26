import { Router } from 'express';
import { EnquiryController } from '../controllers/enquiryController';

const router = Router();

router.post('/', EnquiryController.create);
router.get('/', EnquiryController.list);

export default router;
