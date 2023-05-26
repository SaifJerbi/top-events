import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Mixed } from 'mongoose';

export type TopEventDocument = HydratedDocument<TopEvent>;

@Schema()
export class TopEvent {
  @Prop()
  event: Mixed;

  @Prop()
  market: Mixed;

}

export const TopEventSchema = SchemaFactory.createForClass(TopEvent);