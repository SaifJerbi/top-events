import { Event } from "./event.model";
import { Market } from "./market.model";

export interface TopEvent{
    event: Event;
    market: Market;
}