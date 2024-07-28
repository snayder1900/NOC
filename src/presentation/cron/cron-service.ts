import { CronJob } from "cron";

type CronTime = string | Date;
type OnTick = () => void;

export class CronService {
  static CreateJob(cronTime: CronTime, onTick: OnTick): CronJob {
    // const job = new CronJob("*/3 * * * * *", () => {
    //   const date = new Date();
    //   console.log("3 second", date);
    // });
    const job = new CronJob(cronTime, onTick);
    job.start();

    return job;
  }
}
