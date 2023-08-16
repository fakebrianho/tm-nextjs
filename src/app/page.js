import Image from 'next/image'
import styles from '../styles/globals.css'

function HelloWorld() {
	return <div className='HelloWorld'>{'Hello World'}</div>
}

export default function Home() {
	return (
		<>
			<HelloWorld />
		</>
	)
}
