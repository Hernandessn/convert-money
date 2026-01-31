# 💱 Convert Money - Conversor de Moedas

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>

> Conversor de moedas intuitivo desenvolvido durante a formação **DevClub**. Converta Real Brasileiro para Dólar, Euro, Bitcoin e Yuan em tempo real.

<img src="./assets/Captura de tela 2026-01-31 182956.png"/>
<img src="./assets/Captura de tela 2026-01-31 183006.png"/>
<img src="./assets/Captura de tela 2026-01-31 183016.png"/>

---

## 📋 Sobre o Projeto

Aplicação web para conversão de moedas que permite converter valores em Real Brasileiro (BRL) para diversas moedas internacionais. O conversor possui interface moderna, responsiva e atualiza os valores instantaneamente.

**Moedas disponíveis:**
- 💵 Dólar Americano (USD)
- 💶 Euro (EUR)
- ₿ Bitcoin (BTC)
- ¥ Yuan Chinês (CNY)

---

## 🎯 Funcionalidades

✅ Conversão de **Real Brasileiro** para 4 moedas diferentes  
✅ **Interface intuitiva** — seleção fácil de moedas  
✅ **Formatação automática** — valores formatados corretamente por região  
✅ **Bandeiras e ícones** — identificação visual das moedas  
✅ **Atualização dinâmica** — mudança de moeda em tempo real  
✅ **Design responsivo** — funciona em desktop e mobile  
✅ **Feedback visual** — efeitos hover e active nos botões  

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura semântica
- **CSS3** — Estilização moderna e responsividade
- **JavaScript (Vanilla)** — Lógica de conversão e manipulação do DOM
- **Intl.NumberFormat API** — Formatação de moedas por região

---

## 📁 Estrutura do Projeto

```
convert-money/
├── index.html          # Estrutura HTML
├── style.css           # Estilos e layout
├── javascript.js       # Lógica de conversão
└── assets/             # Imagens
    ├── dinheirologo.gif
    ├── brasil.png
    ├── unidesestades.webp
    ├── euro.jpg
    ├── bitcoin.jpg
    ├── china.jpg
    └── seta.png
```

---

## 🚀 Como Executar

### Online
[Link do deploy aqui]

### Localmente

```bash
# Clone o repositório
git clone https://github.com/Hernandessn/convert-money.git

# Entre na pasta
cd convert-money

# Abra o index.html no navegador
# Ou use um servidor local
python -m http.server 8000
```

Acesse `http://localhost:8000` no navegador

---

## 💻 Como Usar

1. Digite o valor em **Reais (R$)** no campo de entrada
2. Selecione a moeda desejada no menu dropdown:
   - Dólar Americano
   - Euro
   - Bitcoin
   - Yuan Chinês
3. Clique no botão **Converter**
4. Veja o resultado instantaneamente com a formatação correta

---

## 🎨 Destaques do Código

### Conversão de Moedas com Formatação Regional
```javascript
function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value
  const currencyValueConverted = document.querySelector('.currency-value')
  
  const dolarToday = 5.2
  
  if (currencySelect.value == 'dolar') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / dolarToday)
  }
}
```

### Mudança Dinâmica de Moeda
```javascript
function changeCurrency() {
  const currencyName = document.getElementById('currency-name')
  const currencyImage = document.querySelector('.currency-img')

  if (currencySelect.value == 'dolar') {
    currencyName.innerHTML = 'Dólar americano'
    currencyImage.src = './assets/unidesestades.webp'
  }
  
  convertValues() // Converte automaticamente
}
```

### Event Listeners
```javascript
currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)
```

---

## 📊 Taxas de Conversão

| Moeda | Taxa (exemplo) |
|-------|----------------|
| Dólar Americano | R$ 5,20 |
| Euro | R$ 6,20 |
| Bitcoin | R$ 322.580,64 |
| Yuan Chinês | R$ 0,71 |

> **Nota:** As taxas são fixas para fins educacionais. Em produção, seria necessário integrar uma API de cotação em tempo real.

---

## 🎓 Aprendizados

Durante o desenvolvimento deste projeto na formação DevClub, pratiquei:

- ✅ Manipulação do DOM com JavaScript
- ✅ Event listeners (click e change)
- ✅ Funções e lógica condicional
- ✅ API Intl.NumberFormat para formatação de moedas
- ✅ Formatação regional (pt-BR, en-US, de-DE, etc.)
- ✅ Manipulação de imagens dinâmicas
- ✅ Estruturação de layout com Flexbox
- ✅ Google Fonts para tipografia
- ✅ Estados de botão (hover, active)

---


## 🌟 Funcionalidades Destacadas

### Formatação Automática por Região
O projeto utiliza `Intl.NumberFormat` para formatar valores corretamente:
- **pt-BR**: R$ 1.000,00
- **en-US**: $1,000.00
- **de-DE**: 1.000,00 €

### Design Responsivo
Interface adaptável que funciona perfeitamente em:
- 📱 Smartphones
- 💻 Tablets
- 🖥️ Desktops

---

## 📞 Contato

- 📧 **Email**: hernandesneves07@gmail.com
- 💼 **LinkedIn**: [linkedin.com/in/hernandes-sales](https://linkedin.com/in/hernandes-sales)
- 🐙 **GitHub**: [@hernandessn](https://github.com/hernandessn)

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais durante a formação DevClub.

---

<div align="center">
  <p><strong>💰 Desenvolvido com 💙 durante a formação DevClub</strong></p>
  <p>Projeto acadêmico - 2024</p>
</div>
