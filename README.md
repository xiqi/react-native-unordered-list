# react-native-unordered-list
 React Native Unordered List Component

## Installation

`yarn add react-native-unordered-list` or `npm install react-native-unordered-list --save`

and then import into your component

```javascript
import Unorderedlist from 'react-native-unordered-list';
```


## Usage

### Basic Usage

```javascript
<Unorderedlist><Text>item</Text></Unorderedlist>
```

### Nested List

![Nested List](https://user-images.githubusercontent.com/4802250/72935146-c0aed880-3d9f-11ea-90a4-c9391747c5cd.jpeg)

```javascript
<Unorderedlist><Text>Grandparent</Text>
    <Unorderedlist><Text>Parent</Text>
        <Unorderedlist><Text>Child</Text></Unorderedlist>
    </Unorderedlist>
</Unorderedlist>
 ```

### Customized bullet character

```javascript
<Unorderedlist bulletUnicode={0x2765}><Text>Grandparent</Text>
```

Some commonly used bullet characters are:

```javascript
0x2022 •
0x25E6 ◦
0x25AA ▪
0x2023 ‣
0x2043 ⁃
0x25D8 ◘
0x2765 ❥
0x29BE ⦾
0x29BF ⦿
```

Find more: https://home.unicode.org/


## API

| Property       | Type                       | Description                 |
|:--------------:|:--------------------------:|:---------------------------:|
| `bulletUnicode` | A hex number (e.g. `0x2765`) | Customized bullet character |


## Example

![A complete example](https://user-images.githubusercontent.com/4802250/72935420-45015b80-3da0-11ea-8e0e-318d4e8941d5.jpeg)


```javascript
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
            <Unorderedlist bulletUnicode={0x2765}><Text>Buy some books</Text>
                <Unorderedlist bulletUnicode={0x2023}><Text>Kafka on the Shore</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x2023}><Text>Animal Farm</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x2023}><Text>The Art of Computer Programming</Text></Unorderedlist>
            </Unorderedlist>
        
        </View>
    );
};
```

## Removal

`yarn remove react-native-unordered-list` or `npm uninstall react-native-unordered-list --save`
and then delete your import statement

## Contact the Author

Qi Xi

me@imxiqi.com
