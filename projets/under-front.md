# Under (Éclypse)

Application de découverte musicale par IA (React Native CLI, iOS/Android).

## Configuration

1) Créez un fichier `.env` à la racine (voir `.env.example`).

```env
SPOTIFY_CLIENT_ID=xxxxx
SPOTIFY_TOKEN=xxxxx
```

2) Installez les dépendances et lancez:

```sh
npm i
npm start -- --reset-cache
npm run android
```

## Dépendances clés
- Navigation: `@react-navigation/native`, `@react-navigation/native-stack`, `@react-navigation/bottom-tabs`
- Gestures/Anim: `react-native-gesture-handler`, `react-native-reanimated`, `react-native-screens`
- State: `zustand`
- HTTP: `axios`
- UI: `styled-components` (optionnel), thème custom
- SVG: `react-native-svg`
- Env: `react-native-dotenv`

## Structure
- `src/navigation/RootNavigator.tsx` (Stack + Tabs)
- `src/screens/*` (Home, Explore, ArtistDetail, Profile)
- `src/services/musicService.ts` (Spotify API minimal)
- `src/store/useAppStore.ts` (Zustand)
- `src/components/ArtistCard.tsx`
- `src/theme/colors.ts`
