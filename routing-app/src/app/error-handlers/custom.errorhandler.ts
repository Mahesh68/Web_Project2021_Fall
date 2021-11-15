import { ErrorHandler, Injectable } from "@angular/core";
import { ErrorLogService } from "./error-log.service";

@Injectable()
export class CustomErrorHandler extends ErrorHandler {
    constructor(private errorLogService: ErrorLogService) {
        super();
    }

    handleError(error: any) {
        // super.handleError(error);
        // console.log("CustomErrorHandler - ", error.message);

        this.errorLogService.logError(error);
    }
}