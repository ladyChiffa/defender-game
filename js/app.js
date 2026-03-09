import { timeout as logsTimeout,  Client as LogsClient } from './logs.js';
import { timeout as statsTimeout, Client as StatsClient } from './stats.js';

console.log(logsTimeout);
console.log(statsTimeout)
console.log(LogsClient);
console.log(StatsClient);

console.log("app executed");

import './logs.js'; // повторно загрузки не будет - это поведение модулей - загружаются только 1 раз


