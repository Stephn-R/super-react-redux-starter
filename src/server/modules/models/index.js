// ────────────────────────────────────────────────────────────────────────────────
// MODELS

import UsersModel from './User';

// ────────────────────────────────────────────────────────────────────────────────

import { Database } from '../../config';

// ────────────────────────────────────────────────────────────────────────────────

export default Database;
export const Users = UsersModel(Database);
