# react-native-unordered-list
 React Native Unordered List Component

## Installation

`yarn add react-native-unordered-list` or `npm install react-native-unordered-list --save`

and then import in your component

`import Unorderedlist from 'react-native-unordered-list';`


## Usage

### Basic Usage

`<Unorderedlist><Text>item</Text></Unorderedlist>`

### Nested List

```
<Unorderedlist><Text>Grandparent</Text>
    <Unorderedlist><Text>Parent</Text>
        <Unorderedlist><Text>Child</Text></Unorderedlist>
    </Unorderedlist>
</Unorderedlist>
 ```

 ### Customized bullet character

 `<Unorderedlist bulltUnicode={0x2765}><Text>Grandparent</Text>`


## API

| Property       | Type                       | Description                 |
| -------------- |:--------------------------:| ---------------------------:|
| `bulltUnicode` | A hex number (e.g. 0x2765) | Customized bullet character |


## Example

```
import React from 'react';
import { Text } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

export default () => {
    return (
        <View>

           <Unorderedlist><Text>Buy some things</Text>
                <Unorderedlist><Text>Eggs</Text></Unorderedlist>
                <Unorderedlist><Text>A guitar</Text></Unorderedlist>
                <Unorderedlist><Text>A bunny</Text>
                    <Unorderedlist><Text>a white one</Text></Unorderedlist>
                    <Unorderedlist><Text>and a black one</Text></Unorderedlist>
                </Unorderedlist>
            </Unorderedlist>
            <Unorderedlist bulltUnicode={0x2765}><Text>Buy some books</Text>
                <Unorderedlist bulltUnicode={0x2023}><Text>Kafka on the Shore</Text></Unorderedlist>
                <Unorderedlist bulltUnicode={0x2023}><Text>Animal Farm</Text></Unorderedlist>
                <Unorderedlist bulltUnicode={0x2023}><Text>The Art of Computer Programming</Text></Unorderedlist>
            </Unorderedlist>
        
        </View>
    );
};
```

## Removal

`yarn remove react-native-unordered-list` or `npm uninstall react-native-unordered-list --save`
and then delete your import statement
