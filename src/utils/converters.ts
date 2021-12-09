export function exerciseNameToPath(exerciseName: string) {
	const exercisePath = exerciseName.toLowerCase().replaceAll(' ', '-');
	const path = '/exercises/' + exercisePath;
	return path;
}

export function pathToExerciseName(path: string) {
	const nameFromPath = path.replace('/exercises/', '');
	const exerciseName = nameFromPath.replaceAll('-', ' ');
	return exerciseName;
}
