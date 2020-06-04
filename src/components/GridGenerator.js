import React from 'react'

import numWords from 'num-words'

import PropTypes from 'prop-types'
import { chunk } from 'lodash'

import { render } from 'react-dom'

const GridGenerator = ( { layout, children, className } ) => {
    
    let numColumns = (function() {
        switch(layout) {
            case 'single':
                return 1
            case 'halves':
            case 'side-left':
            case 'side-right':
            case 'margin-left':
            case 'margin-right':
                return 2
            case 'thirds':
            case 'triptych':
                return 3
            case 'quarters':
                return 4
            default: 
                return 1
        }
    })()
    
    const rows = chunk(React.Children.toArray(children), numColumns)
    return(
        <>
            {rows.map((numColumns) => {
                let i = 1
                return (
                    <div className={"row " + layout + ' ' + className}>
                        {numColumns.map((col) => {
                            let columnName = numWords(i).replace(' ', '')
                            i++
                            return(
                                <div className={'column at-medium-half-width at-small-full-width ' + columnName}>
                                    {col}
                                </div> 
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}

const AllowedLayouts = [
    'single',
    'halves',
    'thirds',
    'fourths',
    'side-left',
    'side-right',
    'margin-left',
    'margin-right',
    'triptych'
]

GridGenerator.propTypes = {
    layout: PropTypes.oneOf(AllowedLayouts)
}

GridGenerator.defaultProps = {
    layout: 'single'
}

export default GridGenerator