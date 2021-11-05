import Icons from './../../svg/icons.svg'

export const Icon = ({ name, color, width, height, className, styles }) => {
    return (
      <svg width={`${width}px`} height={`${height}px`} stroke={color} className={className} style={styles}>
        <use href={Icons + `#${name}`} />
      </svg>
    )
}