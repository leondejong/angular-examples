part of angular_dart_examples;

typedef void ForEachCallback(dynamic value, [String key, Map<String, dynamic> object]);

class Utilities {
	static void forEach(Map<String, dynamic> object, ForEachCallback callback, [List<String> properties]) {
		void filter(String key, dynamic value) {
			if (properties == null || properties.contains(key)) {
				callback(value, key, object);
			}
		}
		// Execute callback for provided properties of object
		object.forEach(filter);
	}
}