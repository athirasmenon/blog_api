import { Response } from "express";

class Res {
  /**
   * @param status
   * @param message
   * @param data
   * @param res
   * @memberof Res
   * @returns
   */

  public success = (
    status: number,
    message: string,
    data: object,
    res: Response
  ) => {
    return res.status(status).json({ status, message, data });
  };

  /**
   * @param status
   * @param message
   * @param res
   * @memberof Res
   * @returns
   */
  public ok = (status: number, message: string, res: Response) => {
    return res.status(status).json({
      status,
      message,
    });
  };

  /**
   * @param status
   * @param message
   * @param res
   * @memberof Res
   * @returns
   */
  public error = (status: number, message: string, res: Response) => {
    return res.status(status).json({
      status,
      message,
    });
  };
}

export default Res;