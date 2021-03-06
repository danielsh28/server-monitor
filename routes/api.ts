import express, { Request, Response } from 'express';
import QueryString from 'qs';

import { getCategoriesFromDB, getServerData, getNewsFromDB } from '../service/data.service.db';

const router = express.Router();

router.get('/choose-category', async (req: Request, res: Response) => {
  const data = await getServerData(getCategoriesFromDB);
  res.send(JSON.stringify(data));
});

router.get('/user-dashboard', async (req: Request, res: Response) => {
  const q: QueryString.ParsedQs = req.query;
  const data = await getServerData(getNewsFromDB, req.query);
  res.send(JSON.stringify(data));
});

export default router;
