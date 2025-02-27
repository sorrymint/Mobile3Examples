import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
 },
 row:{
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
   //  height: 50,
 },
 header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
 },
 subHeader: {
    fontSize: 18,
    fontWeight: '500',
    color: '#666',
    marginBottom: 10,
 },
 paragraph: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
 },
 input: {
    height: 40,
    margin: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
 },
 button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    alignContent: 'center'
 },
 deleteButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
 },
 icon: {
    marginRight: 5,
    fontSize: 18,
 },
 card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 5,
 },
});
