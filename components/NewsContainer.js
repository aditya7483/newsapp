import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Linking,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const defaultImgLink =
  'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';

const NewsContainer = ({ urlToImage, title, description, source, url }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleNewsPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleSourcePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handleNewsPress} activeOpacity={0.8}>
      <View style={styles.container}>
        <Image
          source={{ uri: urlToImage || defaultImgLink }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {description}
          </Text>
          <TouchableOpacity onPress={handleSourcePress}>
            <Text style={styles.source}>Source: {source.name}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <Image
            source={{ uri: urlToImage || defaultImgLink }}
            style={styles.modalImage}
          />
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalDescription}>{description}</Text>
          <TouchableOpacity onPress={handleSourcePress}>
            <Text style={styles.source}>Source: {source.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleModalClose}
          >
            <AntDesign name="closecircle" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  source: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  modalImage: {
    height: 200,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default NewsContainer;
