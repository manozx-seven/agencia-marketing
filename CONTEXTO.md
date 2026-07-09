# CONTEXTO DO PROJETO — Empresa X

> Documento de referência do projeto. É lido automaticamente no início de cada sessão do terminal para retomar o trabalho de onde paramos. Consulte também [ATUALIZACOES.md](ATUALIZACOES.md) para o histórico de mudanças.

## Visão Geral

Site institucional / proposta comercial da **Empresa X**, uma agência de
**Marketing de Conteúdo & Redes Sociais**. O objetivo é transformar a proposta
comercial (originalmente em `Proposta_Comercial_Empresa_X.docx`) em um site
sofisticado para divulgar o trabalho da agência e os planos oferecidos.

## Sobre a Empresa X (conteúdo base)

Agência especializada em **identidade visual, gestão de redes sociais e produção
de conteúdo em vídeo**. Ajuda negócios a construir presença estratégica no
Instagram, com planejamento, produção e publicação de ponta a ponta.

### O que fazemos
- **Estratégia** — Plano de marketing mensal/trimestral, metas e personas; auditoria de perfil.
- **Gestão de Instagram** — Calendário editorial, postagens (feed, stories, reels), agendamento otimizado.
- **Produção de Conteúdo** — Identidade visual (logo, paleta, templates), design de posts/carrosséis, vídeos e reels.
- **Serviços sob demanda** — Bio link personalizado, site institucional, tráfego pago.

### Planos
| Recurso | START | CRESCE | FULL |
|---|---|---|---|
| Identidade visual | Templates básicos | Templates + variações | Identidade completa (logo + manual) |
| Posts por mês | 8 posts | 12 posts + 4 stories/semana | 16 posts + stories diários |
| Vídeos/Reels | 2 por mês | 4 por mês | 8 por mês |
| Plano de marketing | Básico (trimestral) | Mensal | Mensal + reunião estratégica |
| Agendamento | Sim | Sim | Sim |
| Bio link | — | Incluso | Incluso |
| Site institucional | — | — | Sob orçamento |
| Relatório | Mensal simples | Mensal detalhado | Mensal + reunião |
| **Investimento/mês** | **R$ 900 – 1.400** | **R$ 1.800 – 2.800** | **R$ 3.200 – 5.000** |

> Valores são referência e podem ser ajustados conforme o escopo.

### Como trabalhamos (processo)
1. **Diagnóstico** — Auditoria do Instagram, briefing de marca, público e tom de voz.
2. **Identidade e Planejamento** — Criação/ajuste da identidade visual e calendário editorial.
3. **Produção** — Design dos posts, roteiro e gravação/edição dos vídeos.
4. **Agendamento e Publicação** — Conteúdo programado nos horários de maior engajamento.
5. **Relatório e Acompanhamento** — Relatório mensal (alcance, engajamento, seguidores, cliques) + reunião.

### Próximos passos (do cliente)
- Escolher o plano ideal.
- Agendar reunião de briefing.
- Início da produção em até 7 dias após aprovação.

## Requisitos de Design (definidos pelo cliente)
- **Sofisticado**, bonito e estilizado — sem "cara de IA" e sem cara de template genérico.
- Ícones sofisticados (SVG bonitos, bibliotecas de qualidade).
- **Direção atual: Tela dividida 50/50** — cada seção é um painel com a metade esquerda **ancorada (sticky)** (número + título + contexto) e o conteúdo rolando à direita. Hero em split claro/escuro. Estrutura foge do padrão "nav topo + hero centralizado + grid de cards" (que o cliente identificou como cara de IA).
  - Fontes: **Fraunces** (display serif) + **Schibsted Grotesk** (texto) — evitar Inter/serifadas genéricas.
  - **Tema visual: Claymorphism** (v6). Sem linhas/bordas duras — separação por espaço e **sombras suaves duplas** (puffy). Cantos bem arredondados. Base azul suave `#e6edf7`, superfície clay `#f1f6fc`, painéis escuros clay `#223250`, acento azul `#3f7ed6` / azul-claro `#a9c8f2` (sobre escuro). Nav = pílula flutuante.
  - Histórico de paleta: areia/terracota → branco+azul → **Claymorphism azul (atual)**.
  - Feedback-chave do cliente: o que "grita IA" é a **estrutura/posições e as fontes** repetidas, não a cor.
  - Histórico de direções: escuro/IA (rejeitado) → claro clean → Swiss editorial ousado (rejeitado) → Corporativo premium (rejeitado: estrutura/fontes com cara de IA) → **Tela dividida (atual)**.
- **Totalmente responsivo.**
- Interações e animações **suaves**.

## Conversão / Contato
- **CTA principal é WhatsApp** (revisão de 2026-07-09 — antes era "sem WhatsApp", requisito invertido pelo cliente).
- Número: **(92) 99286-6146** → link `https://wa.me/5592992866146`.
- Botões "Escolher plano" abrem o WhatsApp com mensagem pré-preenchida do plano.
- **Configurador "Monte seu plano"**: cliente seleciona serviços, vê uma estimativa e o resumo + valor vão pré-preenchidos na mensagem do WhatsApp. Preços são *referência/estimativa* (orçamento final é fechado na conversa).

## Stack Técnica
- Site estático: `HTML + CSS + JavaScript` (sem build step, abre direto no navegador).
- Tipografia: Google Fonts (display serifado + sans para corpo).
- Ícones: SVG inline (estilo Lucide/Phosphor), sem dependência de runtime.
- Animações: CSS + IntersectionObserver (scroll reveal), sem frameworks pesados.

## Estrutura de Arquivos
```
agencia/
├── index.html                        # site na raiz (para deploy Netlify/Pages)
├── css/styles.css
├── js/main.js
├── CONTEXTO.md                       # este arquivo
├── ATUALIZACOES.md                   # changelog de tudo que mudamos
└── Proposta_Comercial_Empresa_X.docx # documento original
```
> Os arquivos do site foram movidos de `site/` para a **raiz** em 2026-07-09 para
> o deploy no Netlify (que publica a raiz por padrão) funcionar sem 404.

## Repositório
- GitHub: https://github.com/manozx-seven/agencia-marketing (branch `main`).
- Deploy: **Netlify** (publish = raiz). Auto-rebuild a cada `git push`.

## Como rodar
Abrir `index.html` na raiz (duplo clique) ou servir a pasta com qualquer
servidor estático.
