import React from 'react'
import { List } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import Store from '../store'
import { useContext } from 'react'
import './ReposList.css'


export const ReposList = () => {
    const OwnStore = useContext(Store)
    const data = OwnStore.slicedRepos
    return (
        <div className= 'wrap'>
            {data.map(item => (
                <List celled key={item.id}>
                    <List.Item>
                        <List.Icon name='github' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header><a href={item.html_url} target="_blank">{item.name}</a></List.Header>
                            {item.description}
                        </List.Content>
                    </List.Item>
                </List>))}
        </div>
    )
}

export default observer(ReposList)


