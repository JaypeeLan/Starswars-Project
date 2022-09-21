import React from 'react'

export function Arrow({ status }) {
	if (!status) {
		return (
			<svg
				width='20'
				height='12'
				viewBox='0 0 9 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M7.28572 -0.00111366L3.12792e-07 7.2846L7.28571 14.5703L9 12.856L3.42857 7.2846L9 1.71317L7.28572 -0.00111366Z'
					fill='#A4A7B7'
				/>
			</svg>
		)
	}

	return (
		<svg
			width='12'
			height='8'
			viewBox='0 0 12 8'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M9.87492 7.00047L5.99492 3.12047L2.11492 7.00047C1.72492 7.39047 1.09492
    7.39047 0.704917 7.00047C0.314917 6.61047 0.314917 5.98047 0.704917 5.59047L5.29492
    1.00047C5.68492 0.610468 6.31492 0.610468 6.70492 1.00047L11.2949 5.59047C11.4822 
    5.7773 11.5874 6.03095 11.5874 6.29547C11.5874 6.55999 11.4822 6.81364 11.2949
    7.00047C10.9049 7.38047 10.2649 7.39047 9.87492 7.00047Z'
				fill='#8993A4'
			/>
		</svg>
	)
}

export function GridSmall() {
	return (
		<svg
			width='18'
			height='18'
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M0 0H7.2V7.2H0V0ZM0 10.8H7.2V18H0V10.8ZM10.8 0H18V7.2H10.8V0ZM10.8 10.8H18V18H10.8V10.8Z'
				fill='white'
			/>
		</svg>
	)
}



export function BreadCrumbIcon() {
	return (
		<svg
			width='17'
			height='3'
			viewBox='0 0 17 3'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle cx='1.5' cy='1.5' r='1.5' fill='#C4C4C4' />
			<circle cx='8.5' cy='1.5' r='1.5' fill='#C4C4C4' />
			<circle cx='15.5' cy='1.5' r='1.5' fill='#C4C4C4' />
		</svg>
	)
}
export function NavItemIcon({ fill, width, height }) {
	return (
		<svg
			width={width ? width : '22'}
			height={height ? height : '22'}
			viewBox='0 0 17 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				width={width}
				height={height}
				rx='5'
				fill={fill ? fill : '#A9C1FF'}
			/>
		</svg>
	)
}

export function LineIcon() {
	return (
		<svg
			width='1'
			height='25'
			viewBox='0 0 1 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='0.25'
				y='0.25'
				width='0.5'
				height='24.5'
				stroke='#E5E5E5'
				strokeWidth='0.5'
			/>
		</svg>
	)
}
export function ProfileIcon() {
	return (
		<svg
			width='30'
			height='30'
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='account'>
				<path
					id='Path'
					d='M15 29.9998C6.7099 29.9998 0 23.2816 0 15C0 6.70967 6.70876 0 15 0C23.2903 0 29.9998 6.70876 29.9998 15C29.9998 23.2896 23.2809 29.9998 15 29.9998Z'
					fill='#66A9DF'
				/>
				<path
					id='Path_2'
					d='M15 0V29.9998C23.2809 29.9998 29.9998 23.2896 29.9998 15C29.9998 6.70898 23.2903 0 15 0Z'
					fill='#4F84CF'
				/>
				<path
					id='Path_3'
					d='M15 18.5156C10.6354 18.5156 6.47388 20.4236 3.4325 24.549C9.48894 31.8697 20.6993 31.8073 26.6741 24.4183C25.1987 22.9507 21.8756 18.5156 15 18.5156Z'
					fill='#D6F3FE'
				/>
				<path
					id='Path_4'
					d='M26.6741 24.4183C23.8534 27.9062 19.6211 29.9998 15 29.9998V18.5156C21.8758 18.5156 25.1987 22.9511 26.6741 24.4183Z'
					fill='#BDECFC'
				/>
				<path
					id='Path_5'
					d='M15 15.8789C12.0921 15.8789 9.72656 13.5132 9.72656 10.6055V8.84766C9.72656 5.93994 12.0921 3.57422 15 3.57422C17.9077 3.57422 20.2734 5.93994 20.2734 8.84766V10.6055C20.2734 13.5132 17.9077 15.8789 15 15.8789Z'
					fill='#D6F3FE'
				/>
				<path
					id='Path_6'
					d='M15 3.57422V15.8789C17.9079 15.8789 20.2734 13.5134 20.2734 10.6055V8.84766C20.2734 5.93971 17.9079 3.57422 15 3.57422Z'
					fill='#BDECFC'
				/>
			</g>
		</svg>
	)
}

export function NotificationIcon() {
	return (
		<svg
			width='16'
			height='20'
			viewBox='0 0 16 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M14 14V9C14 5.93 12.37 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.64 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14ZM8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.9 20 8 20ZM4 15H12V9C12 6.52 10.49 4.5 8 4.5C5.51 4.5 4 6.52 4 9V15Z'
				fill='#333758'
			/>
		</svg>
	)
}
export function LogoutIcon({ width = '14', height = '15', color = 'red' }) {
	return (
		<svg width='18' height='18' viewBox='0 0 30.143 30.143'>
			<path
				d='M20.034,2.357v3.824c3.482,1.798,5.869,5.427,5.869,9.619c0,5.98-4.848,10.83-10.828,10.83
		c-5.982,0-10.832-4.85-10.832-10.83c0-3.844,2.012-7.215,5.029-9.136V2.689C4.245,4.918,0.731,9.945,0.731,15.801
		c0,7.921,6.42,14.342,14.34,14.342c7.924,0,14.342-6.421,14.342-14.342C29.412,9.624,25.501,4.379,20.034,2.357z'
				fill='red'
			/>
			<path
				d='M14.795,17.652c1.576,0,1.736-0.931,1.736-2.076V2.08c0-1.148-0.16-2.08-1.736-2.08
		c-1.57,0-1.732,0.932-1.732,2.08v13.496C13.062,16.722,13.225,17.652,14.795,17.652z'
				fill='red'
			/>
		</svg>
	)
}
