import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAgendamentoDto } from './booking.dto';

@Injectable()
export class AgendamentosService {
  constructor(private prisma: PrismaService) {}

  async agendarConsulta(dto: CreateAgendamentoDto) {
    return this.prisma.agendamento.create({
      data: {
        dataConsulta: dto.dataConsulta,
        usuarioId: dto.usuarioId,
        psicologoId: dto.psicologoId,
        colaboradorId: dto.colaboradorId,
        planoId: dto.planoId,
      },
    });
  }

  async getAgendamentos(usuarioId: number) {
    return this.prisma.agendamento.findMany({
      where: { usuarioId },
    });
  }
}
