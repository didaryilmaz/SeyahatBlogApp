import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Hakkimizda = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hakkımızda</Text>
      <Text style={styles.description}>
        Adventravel, seyahat tutkunları tarafından seyahat tutkunları için tasarlanmış bir seyahat blog uygulamasıdır. Amacımız, dünyayı keşfetmeyi seven insanlara ilham verici ve bilgilendirici içerikler sunarak seyahatlerini planlamalarına ve unutulmaz deneyimler yaşamalarına yardımcı olmaktır.
      </Text>
      <Text style={styles.heading}>Neler Yapıyoruz?</Text>
      <Text style={styles.list}>
        * Dünyanın her yerinden seyahat blogları: Farklı destinasyonlar hakkında bilgi edinmek, seyahat ipuçları almak ve ilham verici hikayeler okumak için geniş bir blog yelpazesine göz atabilirsiniz.
        * Kişiselleştirilmiş öneriler: İlgi alanlarınıza ve seyahat tercihlerinize göre size özel öneriler sunuyoruz.
        * Seyahat planlama araçları: Uçak bileti ve otel rezervasyonu, seyahat güzergahı oluşturma ve diğer seyahat ihtiyaçlarınız için size yardımcı oluyoruz.
        * Seyahat topluluğu: Seyahat tutkunları ile bağlantı kurabileceğiniz ve deneyimlerinizi paylaşabileceğiniz bir topluluk oluşturuyoruz.
      </Text>
      <Text style={styles.heading}>Neden Biz?</Text>
      <Text style={styles.list}>
        * Tutkulu bir ekibimiz var: Seyahat etmeyi ve seyahat deneyimlerini paylaşmayı seven bir ekibimiz var.
        * Kaliteli içerikler sunuyoruz: Dünyanın her yerinden seyahat blogcuları tarafından yazılmış bilgilendirici ve ilham verici içerikler sunuyoruz.
        * Kullanıcı dostu bir platformuz var: Kullanımı kolay ve sezgisel bir platform sunuyoruz.
        * Her zaman gelişmeye devam ediyoruz: Kullanıcılarımızın ihtiyaçlarını karşılamak için sürekli olarak yeni özellikler ekliyoruz.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default Hakkimizda;
