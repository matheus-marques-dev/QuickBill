# QuickBill | Gerador de Orçamentos Profissional

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Tech](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-blue)


> Um gerador de orçamentos (invoices) rápido, responsivo e que roda 100% no navegador, focado em produtividade para freelancers e pequenos prestadores de serviço.

---

## Link do Site: https://quick-bill-vert.vercel.app/

---

## O Problema e a Solução!

**O Problema:** Muitos profissionais perdem tempo formatando documentos no Word ou enviando mensagens informais de preço, o que prejudica a imagem profissional.

**A Solução:** O **QuickBill** atua como um "SaaS de bolso". Ele permite criar documentos padronizados, calcular totais automaticamente e exportar um **PDF limpo (Pixel-Perfect)** direto do navegador, sem necessidade de login, cadastro ou servidor.

---

## Funcionalidades Principais

* **Exportação PDF Profissional:** O layout web se transforma automaticamente em uma folha A4 limpa ao clicar em imprimir, removendo menus e botões.
* **Persistência Automática (LocalStorage):** Os dados não são perdidos se a aba for fechada. O estado da aplicação é salvo no navegador do usuário.
* **Responsividade Avançada:**
    * **Desktop:** Layout Dashboard (Lado a Lado).
    * **Mobile:** Layout Scroll Vertical com tabelas adaptativas (`table-layout: fixed`).
* **Cálculos em Tempo Real:** Adição e remoção de itens com atualização instantânea do valor total.
* **Privacidade:** Nenhum dado é enviado para a nuvem. Tudo fica no dispositivo do usuário.

---

##  Tecnologias Utilizadas

O projeto foi construído seguindo a filosofia **Vanilla JS**, sem dependências externas ou frameworks pesados, para garantir performance máxima e domínio dos fundamentos.

* **HTML5 Semântico:** Estrutura acessível e organizada.
* **CSS3 Moderno:**
    * `Flexbox` para layouts.
    *  Utilização avançada de `@media print` para transformar o layout web em um documento A4 estático.
    *  Implementação da regra `@page { margin: 0 }` para forçar a remoção de cabeçalhos e rodapés automáticos do navegador (data, URL, título), garantindo um PDF limpo.
* **JavaScript (ES6+):**
    * Manipulação do DOM.
    * Gerenciamento de Estado (Arrays e Objetos).
    * Integração com `localStorage`.

---

