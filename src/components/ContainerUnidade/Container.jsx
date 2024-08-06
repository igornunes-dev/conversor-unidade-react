import { useState } from 'react';
import './container.css';

export default function Container() {

  const [valueNumber, setValueNumber] = useState(0);
  const [selectValueP, setSelectValueP] = useState('m');
  const [selectValueS, setSelectValueS] = useState('m');
  const [resultValue, setResultValue] = useState(null);
  const [resultText, setResultText] = useState('')

  const handleChange = (e) => {
    setValueNumber(e.target.value)
    console.log(valueNumber);
  }

  const handleSelectChange = (e) => {
    setSelectValueP(e.target.value)
    console.log(selectValueP);
  }
  
  const handleSelectChangeS = (e) => {
    setSelectValueS(e.target.value)
    console.log(selectValueP);
  }

  const conversionRates = {
    m: {
        km: 0.001,
        cm: 100,
        mm: 1000,
    },
    km: {
        m: 1000,
        cm: 100000,
        mm: 1000000,
    },
    cm: {
        m: 0.01,
        km: 0.00001,
        mm: 10,
    },
    mm: {
        m: 0.001,
        km: 0.000001,
        cm: 0.1,
    },
};

const handleClick = () => {
    const conversion = conversionRates[selectValueP][selectValueS];
    const result = valueNumber * conversion

    if(conversion !== undefined) {
      setResultValue(result)
      setResultText(`${valueNumber} ${selectValueP} equivalem a ${result} ${selectValueS}`)
    }else if(selectValueP === 'm' && selectValueS === 'm') {
      setResultValue(valueNumber)
      setResultText(`${valueNumber} ${selectValueP} equivalem a ${valueNumber} ${selectValueS}`)
    } 

}


  return (
    <div className="container">
      <header className="cabecalho">
        <h1>Conversor de Unidades</h1>
      </header>
      <div className="group-input">
        <div className="inputs">
          <label htmlFor="quant">Digite o Número:</label>
          <input id="quant" type="number" onChange={handleChange} value={valueNumber}/>
        </div>

        <div className="inputs">
          <label htmlFor="select">Escolha uma Unidade:</label>
          <select id="select" onChange={handleSelectChange} value={selectValueP}>
            <option value="m">Metro(s)</option>
            <option value="km">Quilômetro(s)</option>
            <option value="cm">Centímetros(s)</option>
            <option value="mm">Milímetros(s)</option>
          </select>
        </div>

        <div className="inputs">
          <label htmlFor="select">Escolha uma Unidade para Transformar:</label>
          <select id="select" onChange={handleSelectChangeS} value={selectValueS}>
            <option value="m">Metro(s)</option>
            <option value="km">Quilômetro(s)</option>
            <option value="cm">Centímetros(s)</option>
            <option value="mm">Milímetros(s)</option>
          </select>
        </div>

        <div className="input-button">
          <button onClick={handleClick}>Converter</button>
        </div>

        <div className="inputs result">
        <label htmlFor="result">Resultado:</label>
        <input id="result" type="number" value={resultValue}/>
        </div>
      </div>

      {resultValue !== null &&(
        <span className="span-result">{resultText}</span>
      ) }
    </div>
  );
}