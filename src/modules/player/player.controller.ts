import { Body, Controller, Post } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDTO } from './dto/createPlayer.dto';

@Controller({
  path: 'api/player',
  version: '1',
})
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  async createOrUpdatePlayer(
    @Body() createPlayer: CreatePlayerDTO,
  ): Promise<any> {
    return this.playerService.createOrUpdatePlayer(createPlayer);
  }
}
