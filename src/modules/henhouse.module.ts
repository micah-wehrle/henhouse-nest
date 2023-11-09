import { Module } from "@nestjs/common";

import { WordsModule } from "./words/words.module";

/**
 * @description - This is the primary module for all projects, to be instantiated at whatever port. Any child module goes in the imports: [] section of the Module decorator.
 */
 @Module({
  imports: [WordsModule],
})
export class Henhouse {}