import { validateInput } from './utils';
const userInput = req.body.input;
if (!validateInput(userInput)) {
  return res.status(400).send({ error: 'Invalid input' })