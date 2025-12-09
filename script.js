// ESTADO DA APLICAÇÃO
let items = [];

// Iniciar Programa
window.addEventListener('DOMContentLoaded', () => {
    // Define a data de hoje
    const today = new Date().toLocaleDateString('pt-BR');
    document.getElementById('current-date').innerText = today;

    // Tenta carregar dados salvos anteriormente
    loadFromLocalStorage();
});

// CAPTURA DE ELEMENTOS 
const inputCompany = document.getElementById('input-company');
const inputClient = document.getElementById('input-client');
const previewCompany = document.getElementById('preview-company');
const previewClient = document.getElementById('preview-client');

// Edição em tempo real
inputCompany.addEventListener('input', () => {
    previewCompany.innerText = inputCompany.value || 'Nome da Sua Empresa';
    saveToLocalStorage();
});

inputClient.addEventListener('input', () => {
    previewClient.innerText = inputClient.value || 'Nome do Cliente';
    saveToLocalStorage();
});

// FUNÇÕES DE LÓGICA DE NEGÓCIO

function addItem() {
    // Pegar valores dos inputs
    const descInput = document.getElementById('item-desc');
    const qtdInput = document.getElementById('item-qtd');
    const priceInput = document.getElementById('item-price');

    const desc = descInput.value;
    const qtd = parseFloat(qtdInput.value);
    const price = parseFloat(priceInput.value);

    // Validação básica
    if (!desc || isNaN(qtd) || isNaN(price) || qtd <= 0) {
        alert("Por favor, preencha a descrição, quantidade e valor corretamente.");
        return;
    }

    // Adiciona ao array de estado
    items.push({ desc, qtd, price });

    // Limpa os campos para facilitar a próxima entrada
    descInput.value = '';
    qtdInput.value = '1';
    priceInput.value = '';
    descInput.focus(); // Coloca o cursor de volta na descrição

    renderItems();
    saveToLocalStorage();
}

function removeItem(index) {
    if(confirm('Remover este item?')) {
        items.splice(index, 1); // Remove 1 item na posição index
        renderItems();
        saveToLocalStorage();
    }
}

function clearAll() {
    if(confirm('Tem certeza? Isso apagará todos os dados e o orçamento atual.')) {
        items = [];
        inputCompany.value = '';
        inputClient.value = '';
        previewCompany.innerText = 'Nome da Sua Empresa';
        previewClient.innerText = 'Nome do Cliente';
        
        // Limpa o LocalStorage
        localStorage.removeItem('invoiceData');
        
        renderItems();
    }
}

// FUNÇÃO DE RENDERIZAÇÃO
function renderItems() {
    const tbody = document.getElementById('invoice-items');
    tbody.innerHTML = ''; // Limpa a tabela atual

    let totalGeral = 0;

    items.forEach((item, index) => {
        const totalItem = item.qtd * item.price;
        totalGeral += totalItem;

        // Cria a linha da tabela 
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${item.desc}</td>
            <td class="text-right">${item.qtd}</td>
            <td class="text-right">${formatMoney(item.price)}</td>
            <td class="text-right"><strong>${formatMoney(totalItem)}</strong></td>
            <td class="no-print text-right">
                <button class="btn-delete" onclick="removeItem(${index})" title="Remover Item">
                    &times;
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });

    // Atualiza o Total Geral na tela
    document.getElementById('grand-total').innerText = formatMoney(totalGeral);
}

// UTILITÁRIOS 
function formatMoney(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// LOCAL STORAGE
function saveToLocalStorage() {
    const data = {
        company: inputCompany.value,
        client: inputClient.value,
        items: items
    };
    localStorage.setItem('invoiceData', JSON.stringify(data));
}

function loadFromLocalStorage() {
    const dataJSON = localStorage.getItem('invoiceData');
    if (dataJSON) {
        const data = JSON.parse(dataJSON);

        // Restaura campos de texto
        if (data.company) {
            inputCompany.value = data.company;
            previewCompany.innerText = data.company;
        }
        if (data.client) {
            inputClient.value = data.client;
            previewClient.innerText = data.client;
        }

        // Restaura array de itens
        if (data.items) {
            items = data.items;
            renderItems();
        }
    }
}