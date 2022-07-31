# logs

## v0.0.5

- [x] VCode Angular Debuger launch.json
- [ ] `*ngFor="let item of data; trackBy: trackByFn"`
- [ ] performance measurement

```typescript
// main.ts
platformBrowserDynamic()
  .bootstrapModule(RootModule)
  .catch((err) => console.error(err));
```

```javascript
// execute in browser console
ng.profiler.timeChangeDetection();
```

- [ ] Subject, BehaviourSubject, AsyncSubject, ReplaySubject > [https://www.learnrxjs.io](https://www.learnrxjs.io)
- [ ] SubSink [GitHub](https://github.com/wardbell/subsink/blob/master/src/subsink.ts)
- [ ] Superpowers with RxJS + Facades [watch](https://www.youtube.com/watch?v=h-F5uYM69a4)
- [ ] Event Bus, Observable Service [watch](https://youtu.be/_q-HL9YX_pk?t=685)

- [ ] Component lint additonal object. `.eslintrc.json` add:

```json
  {
    "files": ["*module.ts", "*component.ts", "*spec.ts"],
    "extends": ["plugin:@typescript-eslint/recommended"],
    "rules": {}
  }
```

- [ ] `foo$ | async as foo`
