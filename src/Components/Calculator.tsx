import {useState} from "react";

function Calculator() {
    const [input, setInput] = useState<{ name: string, value: number } []>([
        {name: 'Salary', value: 0}
    ])

    const addInput =() =>{
        const newInputName = `input${input.length + 1}`;
        setInput([...input, { name: newInputName, value: 0 }]);
    }

    return (
        <>
            <div className={'mb-5'}>
                {input.map((item, index) =>
                    <div key={index} >
                        <input type="text"
                               name={item.name}
                               value={item.name}
                        />
                        <input
                            name={item.name}
                            type="text"
                            value={item.value}
                            className={'border-secondary border-1 border-solid rounded py-1 px-2 bg-white text-primary'}
                        />
                    </div>
                )}
            </div>

            <section>
                <button onClick={addInput} className={'py-1 px-2 bg-quaternary text-white rounded'}> Add Data</button>
            </section>
        </>
    )
        ;
}

export default Calculator;