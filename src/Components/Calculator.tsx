import {useState} from "react";

function Calculator() {
    const [input, setInput] = useState<{ name: string, value: number } []>([
        {name: 'Allowance', value: 0}
    ])

    const [salary, setSalary] = useState<number>(0)

    const addInput = () => {
        const newInputName = `input${input.length + 1}`;
        setInput([...input, {name: newInputName, value: 0}]);
    }

    const handleInputChange = (index: number, field: keyof typeof input[0], value: string | number) => {
        const updatedInput = [...input]; // Create a copy of the state
        updatedInput[index][field] = value as never; // Update the specific field
        setInput(updatedInput); // Update the state
    };

    return (
        <>
           <div className={'container'}>
               <section className={'flex justify-between items-center w-full'}>
                   <label htmlFor="salary">Salary</label>
                   <input type="text"
                          name={'salary'}
                          placeholder={'Salary'}
                          value={salary}
                          className={'border-secondary border-1 border-solid rounded py-1 px-2 bg-white text-primary'}
                          onChange={(e) => setSalary(parseFloat(e.target.value))}
                   />
               </section>
               <section className={'mb-5 bg-quaternary py-2 px-2'}>
                   {input.map((item, index) =>
                       <div key={index} className={'w-full flex justify-between items-center'}>
                           <input type="text"
                                  name={item.name.toString()}
                                  value={item.name}
                                  onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                           />
                           <input
                               name={item.name.toString()}
                               type="text"
                               value={item.value}
                               className={'border-secondary border-1 border-solid rounded py-1 px-2 bg-white text-primary'}
                               onChange={(e) => handleInputChange(index, 'value', parseFloat(e.target.value))}
                           />
                       </div>
                   )}
                   <div>
                       <button onClick={addInput} className={'py-1 px-2 bg-secondary text-white rounded'}> Add Data
                       </button>
                   </div>
               </section>
               <code className={'py-1 px-2 bg-quaternary rounded mt-5 block'}>
                   <pre>{JSON.stringify(input, null, 2)}</pre>
               </code>
           </div>
        </>
    )
        ;
}

export default Calculator;