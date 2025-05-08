import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { AgendamentosService } from './booking.service';
import { CreateAgendamentoDto } from './booking.dto';

@Controller('agendamentos')
export class AgendamentosController {
  constructor(private readonly agendamentosService: AgendamentosService) {}

  @Post()
  async agendar(@Body() createAgendamentoDto: CreateAgendamentoDto) {
    return this.agendamentosService.agendarConsulta(createAgendamentoDto);
  }

  @Get(':usuarioId')
  async getAgendamentos(@Param('usuarioId') usuarioId: number) {
    return this.agendamentosService.getAgendamentos(usuarioId);
  }
}
