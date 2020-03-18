import React from 'react';
import { addPhone } from '../lib/actions'
import { connect } from 'react-redux'

const AddPhone = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addPhone(input.value))
                input.value = ''
            }}>
                <input ref={node => input = node}/>
                <button type='submit'>
                    Add Phone
                </button>
            </form>
        </div>
    )
}

export default connect()(AddPhone)