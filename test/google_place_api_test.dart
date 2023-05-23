import 'package:cloud_functions/cloud_functions.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  setUp(() async {
    WidgetsFlutterBinding.ensureInitialized();
    await Firebase.initializeApp();
  });
  test('google place api', () async {
    final callable = await FirebaseFunctions.instance
        .httpsCallable('placesapi')
        .call({'query': 'Taceddin Veli'});
    print(callable.data);
  });
}
