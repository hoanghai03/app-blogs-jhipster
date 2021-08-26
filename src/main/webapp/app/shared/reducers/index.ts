import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';
import register, { RegisterState } from 'app/modules/account/register/register.reducer';
import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
import password, { PasswordState } from 'app/modules/account/password/password.reducer';
import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
import sessions, { SessionsState } from 'app/modules/account/sessions/sessions.reducer';
// prettier-ignore
import customer from 'app/entities/customer/customer.reducer';
// prettier-ignore
import blog from 'app/entities/blog/blog.reducer';
// prettier-ignore
import entry from 'app/entities/entry/entry.reducer';
// prettier-ignore
import tag from 'app/entities/tag/tag.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const rootReducer = {
  authentication,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  sessions,
  customer,
  blog,
  entry,
  tag,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar,
};

export default rootReducer;