/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { config } from '../../context';
import Markdown from '../../components/markdown';

const Docs = ({type}: {type: string}) => {
	const [data, setData] = React.useState('')

	const getData = async () => {
		try {
			if (config.legal.docs.indexOf(type)!==-1) {
				const response = await fetch(`${config.legal.url}/${type}.md`)
				const buf = await response.text();
				setData(buf)
			} else {
				setData('not found')
			}
		} catch (error) {
			console.log('home-docs-getData', error)
		}
	}

	React.useEffect(()=>{
		getData()
	}, [])
	return (
		<section className='container'>
			<Markdown text={data} />
		</section>
	)
}

export default Docs;