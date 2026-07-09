# ATUALIZAÇÕES — Histórico de Mudanças

> Registro cronológico de tudo que fazemos no projeto. A entrada mais recente fica no topo.
> Leia junto com [CONTEXTO.md](CONTEXTO.md) para entender o estado atual.

## 2026-07-09 — Revisão v6 (tema Claymorphism)

- Pedido: linhas de divisão mais sutis + aplicar tema **Claymorphism**.
- Removidas todas as linhas/bordas duras (hairlines e divisória vertical). Separação agora por **espaço + sombra suave**.
- Superfícies "de argila": cantos bem arredondados (`--r` 28px / `--r-lg` 40px) e **sombras duplas puffy** (`--sh-clay`, `--sh-dark`, `--sh-accent`, `--sh-inset`).
- Cards clay para serviços, processo, planos, extras do configurador; nav virou **pílula flutuante**; hero direito, planos "Cresce", resumo e CTA como **slabs escuros clay**; checkboxes com efeito "afundado" (inset).
- Paleta base azul suavizada: `--bg #e6edf7`, clay `#f1f6fc`, dark `#223250`, acento `#3f7ed6`. Estrutura de tela dividida mantida.

## 2026-07-09 — Revisão v5.1 (paleta branco + azul)

- Estrutura mantida (Tela dividida 50/50). Só a **paleta** mudou: areia/terracota → **branco + azul premium/clean** (aprovado pelo cliente).
- `:root`: `--bg #ffffff`, `--ink/--line #0d1b2e` (marinho), `--accent #185ca4`, `--accent-2 #8fbcee` (acento sobre painéis escuros), `--paper #eef3f9`.
- Ajustados os acentos sobre fundo marinho (idx--light, cta em, deliver, summary, features do plano destaque) para o azul-claro; nav-scrolled agora branco.

## 2026-07-09 — Revisão v5 (Tela dividida 50/50)

- Feedback do cliente: o problema é **estrutura/posições e fontes** com cara de IA (nav topo → hero centralizado → kicker + 3 cards → Inter). Mudança de eixo (não é mais cor/tema).
- Direção escolhida: **Tela dividida 50/50** + fontes **Fraunces + Schibsted Grotesk**.
- Cada seção virou um **painel split**: metade esquerda **sticky** (`N.0x` + título + contexto) e conteúdo rolando à direita, separados por linha vertical forte.
- **Hero** em split claro/escuro (headline à esquerda + painel escuro "O que entregamos" à direita).
- **Serviços/Processo** como linhas empilhadas com numeral grande; **Planos** empilhados verticalmente (Cresce invertido).
- **Configurador**: resumo/estimativa **fixo na coluna esquerda** enquanto as opções rolam à direita (uso real do formato).
- Paleta trocada para editorial: areia clara + quase-preto + terracota. JS inalterado (mesmos IDs/atributos).

## 2026-07-09 — Revisão v4 (redesign Corporativo premium)

- Direção escolhida pelo cliente: **Corporativo premium** + acento **azul-petróleo/grafite**.
- Base clara e fria (`#f6f7f8`), grafite azulado (`#16202a`), petróleo (`#0f5d6e`). Cards brancos com borda suave e sombra sutil no hover.
- Tipografia trocada: **Newsreader** (serif editorial, mais séria) + **Inter**. Removida Space Mono/Fraunces (artsy demais).
- **Hero** sóbrio com **barra de métricas** (4 provas honestas: ponta a ponta / 7 dias / 5 etapas / sob medida).
- **Serviços/Sobre** em grid de cards refinados; **Planos** com "Cresce" destacado por borda petróleo; **Processo** em 5 colunas.
- **CTA** em bloco grafite com lista de passos; **footer** corporativo multi-coluna. WhatsApp e configurador mantidos (JS inalterado).

## 2026-07-09 — Revisão v3 (redesign Editorial / Swiss ousado)

- Direção escolhida pelo cliente: **Editorial / Swiss ousado** (mantendo base clara).
- Tipografia gigante (Fraunces), **grid assimétrico**, numerais enormes, **linhas finas (hairlines) pretas** dividindo tudo, muito respiro.
- Adicionada fonte **Space Mono** para legendas/rótulos técnicos (ar de estúdio de branding). Acento terracota reforçado (`#bb4d2a`).
- **Hero** reestruturado: headline gigante à esquerda + coluna de meta à direita + "ticker" de 4 etapas com hairlines.
- **Serviços** viraram linhas editoriais full-width com número gigante e fundo que sobe (ink) no hover.
- **Planos** em bloco único com hairlines e plano "Cresce" invertido (fundo grafite).
- **Processo** com numerais serifados enormes; **CTA** em bloco escuro; **footer** com wordmark gigante "EmpresaX".
- Botões com preenchimento animado (wipe) no hover. Configurador e links de WhatsApp mantidos (JS inalterado).

## 2026-07-09 — Revisão v2 (tema claro + WhatsApp + configurador)

### Mudança de tema
- Site refeito para **tema claro/clean editorial** (papel quente `#f7f4ef`, tinta grafite, acento terracota `#b5532f`).
- Removidos glows, gradientes chamativos e glassmorphism pesado (davam "cara de IA").

### WhatsApp (substituindo e-mail)
- CTA principal agora é **WhatsApp**: `https://wa.me/5592992866146` (número (92) 99286-6146).
- Todos os links `[data-wa]` recebem o link via JS; botões dos planos abrem o WhatsApp com **mensagem pré-preenchida** do plano.
- Adicionado **botão flutuante** de WhatsApp e link no rodapé (e-mail removido).

### Configurador "Monte seu plano" (novo)
- Seção `#montar`: cliente escolhe identidade / posts / vídeos (radio) + extras (checkbox).
- Calcula **estimativa mensal** ao vivo e monta a mensagem do WhatsApp com o resumo dos itens + total.
- Preços exibidos são **referência/estimativa**; orçamento final é fechado na conversa.

## 2026-07-09

### Setup inicial do projeto
- Extraído o conteúdo de `Proposta_Comercial_Empresa_X.docx`.
- Criado `CONTEXTO.md` com o contexto completo do projeto (empresa, planos, processo, requisitos de design, stack).
- Criado `ATUALIZACOES.md` (este arquivo) para o histórico de mudanças.
- Configurado hook de `SessionStart` para ler automaticamente o contexto e as atualizações ao abrir o terminal.

### Criação do site (v1)
- Criada a estrutura em `site/` (`index.html`, `css/styles.css`, `js/main.js`).
- Site estático, responsivo, tema escuro sofisticado com acento âmbar/dourado.
- Seções: Navegação (glass), Hero, Sobre, O Que Fazemos, Planos (START/CRESCE/FULL), Como Trabalhamos (timeline), Próximos Passos / CTA, Rodapé.
- Ícones SVG inline (estilo Lucide), tipografia Fraunces + Inter, animações de scroll reveal suaves. Sem WhatsApp.
