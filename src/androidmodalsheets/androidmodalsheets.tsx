import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RectButton from "../Button/rect";
import { AndroidModalSheetProps } from './androidmodalsheets.type';
import { createStyle } from '../utils/styleCompat';
import { ContainerComponentProps } from '../types/common';

const AndroidModalSheet: React.FC<AndroidModalSheetProps> = ({
  title,
  label,
  action = 1,
  compact = false,
  onClose,
  onButtonPress,
  onClipboard,
  onForward,
  children,
  className,
  style,
  ...props
}) => {
  const containerStyle = createStyle({
    className: `${className || ''} flex-1 bg-gray-800 bg-opacity-50 w-full`,
    style: [
      {
        flex: 1,
        backgroundColor: 'rgba(31, 41, 55, 0.5)',
        width: '100%'
      },
      style
    ].filter(Boolean)
  });

  return (
    <SafeAreaView style={containerStyle} {...props}>
      <View style={createStyle({
        className: 'flex-1 justify-end',
        style: { flex: 1, justifyContent: 'flex-end' }
      })}>
        <View style={createStyle({
          className: 'bg-white overflow-hidden w-full h-full',
          style: { backgroundColor: '#ffffff', overflow: 'hidden', width: '100%', height: '100%' }
        })}>
          <View style={createStyle({
            className: 'shadow shadow-gray-400',
            style: { shadowColor: '#9ca3af', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }
          })}>
            <View style={createStyle({
              className: 'flex-row justify-between items-center px-4 py-3',
              style: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12 }
            })}>
              <View style={createStyle({
                className: 'flex-row gap-4 items-center',
                style: { flexDirection: 'row', gap: 16, alignItems: 'center' }
              })}>
                <TouchableOpacity onPress={onClose} style={createStyle({
                  className: 'p-1',
                  style: { padding: 4 }
                })}>
                  <Ionicons name="close" size={24} color="#000" />
                </TouchableOpacity>

                <Text style={createStyle({
                  className: 'text-base font-medium',
                  style: { fontSize: 16, fontWeight: '500' }
                })}>{title}</Text>
              </View>
              <View style={createStyle({
                className: 'flex-row items-center',
                style: { flexDirection: 'row', alignItems: 'center' }
              })}>
                {action >= 3 && (
                  <TouchableOpacity onPress={onClipboard} style={createStyle({
                    className: 'p-1 mr-2',
                    style: { padding: 4, marginRight: 8 }
                  })}>
                    <Ionicons name="clipboard" size={24} color="#000" />
                  </TouchableOpacity>
                )}
                {action >= 2 && (
                  <TouchableOpacity onPress={onForward} style={createStyle({
                    className: 'p-1',
                    style: { padding: 4 }
                  })}>
                    <Ionicons name="arrow-forward" size={24} color="#000" />
                  </TouchableOpacity>
                )}
                {action === 1 && <View style={createStyle({
                  className: 'w-6',
                  style: { width: 24 }
                })} />}
              </View>
            </View>
            {!compact && (
              <Text style={createStyle({
                className: 'text-xl px-6 font-semibold mb-4',
                style: { fontSize: 20, paddingHorizontal: 24, fontWeight: '600', marginBottom: 16 }
              })}>{title}</Text>
            )}
          </View>

          <View style={createStyle({
            className: 'p-2 flex-1',
            style: { padding: 8, flex: 1 }
          })}>
            <View style={createStyle({
              className: 'bg-green-50 p-2 flex-1',
              style: { backgroundColor: '#f0fdf4', padding: 8, flex: 1 }
            })}>
              {children}
            </View>
          </View>

          <View style={createStyle({
            className: 'px-2 py-3',
            style: { paddingHorizontal: 8, paddingVertical: 12 }
          })}>
            <RectButton label={label} onPress={onButtonPress} />
          </View>

          <View style={createStyle({
            className: 'items-center mb-2 pt-1',
            style: { alignItems: 'center', marginBottom: 8, paddingTop: 4 }
          })}>
            <View style={createStyle({
              className: 'w-20 h-1 bg-gray-800 rounded-full',
              style: { width: 80, height: 4, backgroundColor: '#1f2937', borderRadius: 2 }
            })} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AndroidModalSheet;