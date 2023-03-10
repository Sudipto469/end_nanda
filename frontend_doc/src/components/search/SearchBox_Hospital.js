import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
// import { useHistory,useNavigate } from 'react-router-dom'
import { useNavigate as useHistory  } from 'react-router-dom'

function SearchBox_Hospital() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()
    console.log("history",history)

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            // history.push(`/?keyword=${keyword}&page=1`)
            // history(`/?keyword=${keyword}&page=1`)
            history(`/hospitals?keyword=${keyword}&page=1`)
        } else {
            // history.push(history.push(history.location.pathname))
            history(history(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'
            ></Form.Control>

            <Button
                type='submit'
                variant='outline-success'
                className='p-2'
            >
                Submit
            </Button>
        </Form>
    )
}

export default SearchBox_Hospital
