
import {Record,Maybe} from 'typed-immutable';

export const Payment =  Record({
  payment_id: String(),
  depositor: String(),
  deposit_amount: Number(),
  amount: Number(),
  deposit_date: Number(),
  uploadedFilePath: String(),
  payment_status: String(),
  nomination_id: String(),
  createdBy: String(),
  createdAt: Number(),
  updatedAt: Number(),
  division_name: String(),
  candidate_payment: String(),
  team_name: String(),
  no_of_candidate: Number(),
  note: Maybe(String),
});
