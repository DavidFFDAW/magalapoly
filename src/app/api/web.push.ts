import { envVapid } from "@/constants/config";
import webpush from "web-push";

webpush.setVapidDetails(
    `mailto:${envVapid.email}`,
    envVapid.public,
    envVapid.server
);

export default webpush;
