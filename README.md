# QuickBill | Gerador de Orçamentos Profissional

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Tech](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-blue)


> Um gerador de orçamentos (invoices) rápido, responsivo e que roda 100% no navegador, focado em produtividade para freelancers e pequenos prestadores de serviço.

---

## 📸 Preview

*(Adicione aqui um print da tela desktop e um da tela mobile)*
<div style="display: flex; gap: 10px;">
  <img src="<img width="1920" height="961" alt="Desktop" src="https://github.com/user-attachments/assets/eedf0691-021c-49a1-a5a7-57651b53c22e" />
" alt="Desktop View" width="60%">
  <img src="./assets/mobile-preview.png" alt="Mobile View" width="30%">
</div>

---

## 💡 O Problema e a Solução

**O Problema:** Muitos profissionais perdem tempo formatando documentos no Word ou enviando mensagens informais de preço, o que prejudica a imagem profissional.

**A Solução:** O **QuickBill** atua como um "SaaS de bolso". Ele permite criar documentos padronizados, calcular totais automaticamente e exportar um **PDF limpo (Pixel-Perfect)** direto do navegador, sem necessidade de login, cadastro ou servidor.

---

## ✨ Funcionalidades Principais

* **🖨️ Exportação PDF Profissional:** O layout web se transforma automaticamente em uma folha A4 limpa ao clicar em imprimir, removendo menus e botões.
* **💾 Persistência Automática (LocalStorage):** Os dados não são perdidos se a aba for fechada. O estado da aplicação é salvo no navegador do usuário.
* **📱 Responsividade Avançada:**
    * **Desktop:** Layout Dashboard (Lado a Lado).
    * **Mobile:** Layout Scroll Vertical com tabelas adaptativas (`table-layout: fixed`).
* **⚡ Cálculos em Tempo Real:** Adição e remoção de itens com atualização instantânea do valor total.
* **🔒 Privacidade:** Nenhum dado é enviado para a nuvem. Tudo fica no dispositivo do usuário.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído seguindo a filosofia **Vanilla JS**, sem dependências externas ou frameworks pesados, para garantir performance máxima e domínio dos fundamentos.

* **HTML5 Semântico:** Estrutura acessível e organizada.
* **CSS3 Moderno:**
    * `Flexbox` para layouts.
    * `@media print` para customização da impressão.
    * `@page` hacks para remover cabeçalhos/rodapés do navegador.
* **JavaScript (ES6+):**
    * Manipulação do DOM.
    * Gerenciamento de Estado (Arrays e Objetos).
    * Integração com `localStorage`.

---

## 🧠 Destaques Técnicos (Desafios Resolvidos)

### 1. Impressão Limpa no Linux/Windows
Um dos maiores desafios foi remover os cabeçalhos padrão do navegador (Data, URL, Título) que poluem o PDF.
**Solução:** Implementação de uma regra CSS crítica injetada no HTML para forçar as margens da folha a zero, obrigando o browser a ocultar os metadados.

```css
@media print {
    @page { margin: 0 !important; size: auto !important; }
}
