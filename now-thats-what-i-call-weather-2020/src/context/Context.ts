import { ISessionContext } from "@emisgroup/application-session-management";
import { IApplicationContext } from "@emisgroup/single-spa-library";

export interface IContext {
  /**
   * SessionContext
   */
  application?: IApplicationContext;
  /**
   * SessionContext
   */
  session?: ISessionContext;
}

export const Context: IContext = {
};
