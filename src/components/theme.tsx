import React from 'react';
import { Button } from './buttons';
// import { StyledCard } from './cards';
// import Layout from './layout';
// import { Checkbox, Radio, Input, Select, Textarea } from './Inputs';

const Theme = () => {
	const [checked, setChecked] = React.useState(false)
	const [radioValue, setRadioValue] = React.useState('a')
	const buttons = [
		{
			code: `<Button>Standard Button</Button>`,
			element: [
				<Button>Primary</Button>,
				<Button className='hover'>Hover</Button>,
				<Button className='active'>Active</Button>,
				<Button disabled>Disabled</Button>
			]
		},
		{
			code: `<Button className="fill">Standard Button</Button>`,
			element: <Button className="fill">fill Button</Button>
		},
		{
			code: `<Button className="fill-sm">Standard Button</Button>`,
			element: <Button className="fill-sm">fill-sm Button</Button>
		},
		{
			code: `<Button className="gray">Standard Button</Button>`,
			element: <Button className="gray">Gray Button</Button>
		},
		{
			code: `<Button className="light">Standard Button</Button>`,
			element: <Button className="light">light Button</Button>
		},
		{
			code: `<Button className="blue">Standard Button</Button>`,
			element: <Button className="blue">light Button</Button>
		},
		{
			code: `<Button className="danger">Standard Button</Button>`,
			element: <Button className="danger">Danger Button</Button>
		},
		{
			code: `<Button className="static-danger">Standard Button</Button>`,
			element: <Button className="static-danger">static-danger Button</Button>
		},
		{
			code: `<Button className="primary">Standard Button</Button>`,
			element: <Button className="primary">primary Button</Button>
		},
		{
			code: `<Button className="light-primary">Standard Button</Button>`,
			element: <Button className="light-primary">light-primary Button</Button>
		},
	];

	const inputs = [
		// {
		// 	code: `<Checkbox label="Checkbox" checked={checked} onChange={(checked)=>setChecked(checked)} />`,
		// 	element: [
		// 		<Checkbox label="Checkbox" checked={checked} onChange={(checked)=>setChecked(checked)} />,
		// 	]
		// },
		// {
		// 	code: `<Checkbox label="Checkbox" checked={checked} onChange={(checked)=>setChecked(checked)} />`,
		// 	element: [
		// 		<Radio label="radio1" name="radio" value="a" checked={checked} onChange={(checked)=>setChecked(checked)} />,
		// 		<Radio label="radio2" name="radio" value="b" checked={checked} onChange={(checked)=>setChecked(checked)} />,
		// 	]
		// },
		// {
		// 	code: `<Input />`,
		// 	element: [
		// 		<Input />,
		// 	]
		// },
		// {
		// 	code: `<Textarea />`,
		// 	element: [
				
		// 		<Textarea />,
		// 	]
		// },
		// {
		// 	code: `<Select><option>Item 1</option></Select>`,
		// 	element: [
		// 		<Select><option>Item 1</option></Select>,
		// 	]
		// },

	];


	return (
        <section className='container' style={{padding: '3em'}}>
            <h1>Deamtest Theme</h1>
            <div className='d column gap-sm'>
                <h2>Buttons</h2>
                {buttons.map((i, k)=>(
                    <div key={k} className='d gap wrap'>
                        <div className='d gap-sm' style={{width: 300}}>
                            {i.element}
                        </div>
                        <div style={{flex: 1}}>
                            <input className='w-100 mono' readOnly style={{padding: '0.5em', outline: 'none', border: 'none', backgroundColor: 'var(--back)', color: 'var(--text)'}} value={i.code} />
                        </div>
                    </div>
                ))}
                <h2>Inputs</h2>
                {/* {inputs.map((i, k)=>(
                    <div key={k} className='d gap wrap'>
                        <div className='d gap-sm' style={{width: 300}}>
                            {i.element}
                        </div>
                        <div style={{flex: 1}}>
                            <input className='w-100 mono' readOnly style={{padding: '0.5em', outline: 'none', border: 'none', backgroundColor: 'var(--back)', color: 'var(--text)'}} value={i.code} />
                        </div>
                    </div>
                ))} */}
            </div>

        </section>
	)
}


export default Theme;