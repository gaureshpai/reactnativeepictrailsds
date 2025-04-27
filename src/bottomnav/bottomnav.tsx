import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { BottomNavProps, NavItemProps } from './bottomnav.type';

const NavItem = ({ icon, label, active, theme, onPress }: NavItemProps) => {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress} activeOpacity={0.7}>
      <Ionicons
        name={icon as any}
        size={24}
        color={active ? theme === 'light' ? '#000000' : '#FFFFFF' : '#BBBBBB'}
      />
      <Text style={[
        styles.label,
        { color: active ? theme === 'light' ? '#000000' : '#FFFFFF' : '#BBBBBB' }
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const BottomNav = ({
  items,
  theme = 'light',
  initialActiveIndex = 0,
  onItemPress
}: BottomNavProps) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const handlePress = (index: number) => {
    setActiveIndex(index);
    if (onItemPress) {
      onItemPress(index);
    }
  };

  return (
    <View style={[
      styles.container,
      { backgroundColor: theme === 'light' ? '#FFFFFF' : '#000000' }
    ]}>
      <View style={styles.navContainer}>
        {items.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            label={item.label}
            active={index === activeIndex}
            theme={theme}
            onPress={() => handlePress(index)}
          />
        ))}
      </View>
      <View style={[
        styles.indicatorContainer,
        { justifyContent: 'center' }
      ]}>
        <View style={[
          styles.indicator,
          { backgroundColor: theme === 'light' ? '#000000' : '#FFFFFF' }
        ]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    paddingVertical: 8,
    elevation: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
  indicatorContainer: {
    width: '100%',
    paddingHorizontal: 40,
    flexDirection: 'row',
    marginTop: 8,
  },
  indicator: {
    height: 3,
    width: 90,
    borderRadius: 1.5,
  }
});

export default BottomNav;