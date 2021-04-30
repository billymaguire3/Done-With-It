import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "t1",
    description: "d1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "t2",
    description: "d2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "t3",
    description: "d3",
    image: require("../assets/mosh.jpg"),
  },
];

const altMessages = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    image: require("../assets/billy.jpg"),
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    image: require("../assets/billy.jpg"),
  },
  {
    id: 3,
    title: "3",
    description: "Description 3",
    image: require("../assets/billy.jpg"),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleItemDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleItemDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(altMessages);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
